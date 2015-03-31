class Reservation < ActiveRecord::Base
  belongs_to :room
  belongs_to :user
  has_many :replies, class_name: 'Post'

  def self.roots
    where(parent_id: nil)
  end

end
