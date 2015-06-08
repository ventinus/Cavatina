json.array!(@allPosts) do |post|
  json.extract! post, :id, :title, :content, :parent_id, :user_id, :created_at
  json.url post_url(post, format: :json)
end
