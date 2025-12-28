import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { menuData, MenuCategory } from "@/data/menu";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredMenu = useMemo(() => {
    if (!searchQuery.trim()) return menuData;

    const query = searchQuery.toLowerCase();
    return menuData
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  const totalItems = menuData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-brand-orange py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
              Explore Our
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Delicious Menu
            </h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Discover over {totalItems}+ mouthwatering dishes crafted with fresh
              ingredients and love.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background border-0 shadow-large text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {filteredMenu.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No dishes found
              </h3>
              <p className="text-muted-foreground">
                Try searching for something else
              </p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredMenu.map((category, catIndex) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  isExpanded={expandedCategories.includes(category.id)}
                  onToggle={() => toggleCategory(category.id)}
                  index={catIndex}
                  searchQuery={searchQuery}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface CategoryAccordionProps {
  category: MenuCategory;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  searchQuery: string;
}

const CategoryAccordion = ({
  category,
  isExpanded,
  onToggle,
  index,
  searchQuery,
}: CategoryAccordionProps) => {
  // Auto-expand if searching
  const shouldExpand = searchQuery.trim() ? true : isExpanded;

  return (
    <ScrollReveal delay={index * 0.05}>
      <motion.div
        className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border"
        whileHover={{ boxShadow: "0 8px 24px -8px hsl(20 14% 12% / 0.12)" }}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left group"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.items.length} items
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: shouldExpand ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center"
          >
            <ChevronDown className="w-5 h-5 text-foreground" />
          </motion.div>
        </button>

        <AnimatePresence>
          {shouldExpand && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.03 }}
                    className="flex items-start justify-between p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                        PKR {item.price.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
};

export default Menu;
