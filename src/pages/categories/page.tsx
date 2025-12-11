import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { supabase } from '../../lib/supabase';

export default function CategoriesPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('status', 'active')
        .is('parent_id', null)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const getColorClass = (index: number) => {
    const colors = [
      'from-primary to-primary-dark',
      'from-primary-light to-primary',
      'from-accent-500 to-primary',
      'from-primary-dark to-primary'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-light to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Browse All Categories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our comprehensive range of product categories and find exactly what you need
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Loading categories...</p>
            </div>
          ) : categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => navigate(`/products?category=${category.slug}`)}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${getColorClass(index)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${category.icon || 'ri-folder-line'} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-primary-dark transition-colors">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-arrow-right-line mr-2"></i>
                    <span>Explore products</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <i className="ri-folder-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Categories Available</h3>
              <p className="text-gray-600">Categories will appear here once they are added</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Post a buying request and let suppliers come to you with their best offers
          </p>
          <button
            onClick={() => navigate('/buyer/rfq')}
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all whitespace-nowrap cursor-pointer"
          >
            Post Buying Request
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
