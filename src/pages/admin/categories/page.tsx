import { useState, useEffect } from 'react';
import AdminLayout from '../../../components/layout/AdminLayout';
import { supabase } from '../../../lib/supabase';

export default function AdminCategoriesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    icon: '',
    description: '',
    order: '',
    status: 'Active'
  });

  // Fetch categories from Supabase
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async () => {
    if (!formData.name || !formData.slug) {
      alert('Please fill in required fields (Name and Slug)');
      return;
    }

    try {
      const { error } = await supabase
        .from('categories')
        .insert([{
          name: formData.name,
          slug: formData.slug,
          icon: formData.icon || 'ri-folder-line',
          description: formData.description,
          display_order: parseInt(formData.order) || 0,
          status: formData.status.toLowerCase(),
          parent_id: null
        }]);

      if (error) throw error;

      // Reset form
      setFormData({
        name: '',
        slug: '',
        icon: '',
        description: '',
        order: '',
        status: 'Active'
      });
      setShowAddModal(false);
      alert('Category added successfully!');
      fetchCategories();
    } catch (error: any) {
      console.error('Error adding category:', error);
      alert('Error adding category: ' + error.message);
    }
  };

  const handleEditCategory = async () => {
    if (!selectedCategory) return;

    try {
      const { error } = await supabase
        .from('categories')
        .update({
          name: selectedCategory.name,
          slug: selectedCategory.slug,
          icon: selectedCategory.icon,
          display_order: selectedCategory.display_order,
          status: selectedCategory.status
        })
        .eq('id', selectedCategory.id);

      if (error) throw error;

      setShowEditModal(false);
      setSelectedCategory(null);
      alert('Category updated successfully!');
      fetchCategories();
    } catch (error: any) {
      console.error('Error updating category:', error);
      alert('Error updating category: ' + error.message);
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;

    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', categoryId);

      if (error) throw error;

      alert('Category deleted successfully!');
      fetchCategories();
    } catch (error: any) {
      console.error('Error deleting category:', error);
      alert('Error deleting category: ' + error.message);
    }
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Category Management
          </h1>
          <p className="text-gray-600 mt-2">Organize and manage product categories and subcategories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-lg whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line"></i>
          <span className="font-semibold">Add Category</span>
        </button>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p className="mt-4 text-gray-600">Loading categories...</p>
        </div>
      ) : (
        <>
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <i className={`${category.icon} text-2xl text-white`}></i>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    category.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {category.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500 mb-4">/{category.slug}</p>

                {category.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                )}

                <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowEditModal(true);
                    }}
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-edit-line mr-1"></i>
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteCategory(category.id)}
                    className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-all text-sm font-medium whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {categories.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-folder-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Categories Yet</h3>
              <p className="text-gray-600 mb-6">Get started by adding your first category</p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap cursor-pointer"
              >
                Add Category
              </button>
            </div>
          )}
        </>
      )}

      {/* Add Category Modal */}
      {showAddModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowAddModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Add New Category</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Electronics" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL Slug *</label>
                  <input 
                    type="text" 
                    placeholder="e.g., electronics" 
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Class</label>
                  <input 
                    type="text" 
                    placeholder="e.g., ri-smartphone-line" 
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                  <p className="text-xs text-gray-500 mt-1">Use Remix Icon classes (e.g., ri-smartphone-line)</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea 
                    rows={3} 
                    placeholder="Category description..." 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Order</label>
                    <input 
                      type="number" 
                      placeholder="1" 
                      value={formData.order}
                      onChange={(e) => setFormData({...formData, order: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setFormData({
                        name: '',
                        slug: '',
                        icon: '',
                        description: '',
                        order: '',
                        status: 'Active'
                      });
                    }}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddCategory}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Edit Category Modal */}
      {showEditModal && selectedCategory && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowEditModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Edit Category</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name</label>
                  <input 
                    type="text" 
                    value={selectedCategory.name}
                    onChange={(e) => setSelectedCategory({...selectedCategory, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL Slug</label>
                  <input 
                    type="text" 
                    value={selectedCategory.slug}
                    onChange={(e) => setSelectedCategory({...selectedCategory, slug: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon Class</label>
                  <input 
                    type="text" 
                    value={selectedCategory.icon}
                    onChange={(e) => setSelectedCategory({...selectedCategory, icon: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Display Order</label>
                    <input 
                      type="number" 
                      value={selectedCategory.display_order}
                      onChange={(e) => setSelectedCategory({...selectedCategory, display_order: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                    <select 
                      value={selectedCategory.status}
                      onChange={(e) => setSelectedCategory({...selectedCategory, status: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowEditModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleEditCategory}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
