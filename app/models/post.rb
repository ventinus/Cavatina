class Post < ActiveRecord::Base
	belongs_to :user
  belongs_to :parent, class_name: 'Post'
  has_many :replies, class_name: 'Post', foreign_key: :parent_id

  def self.roots
    where(parent_id: nil)
  end
end
