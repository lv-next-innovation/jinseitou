# frozen_string_literal: true
5.times do |i|
  Blog.create(user_id: i, message: "aaaaaa")
end