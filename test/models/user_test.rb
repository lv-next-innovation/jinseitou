require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  # test 'it converts multiples of fifteen to fizzbuzz' do
  #   assert_equal 'FizzBuzz', 'FizzBuzz'
  # end

  test 'validate email' do
    validates :email, presence: true
  end

  

end
