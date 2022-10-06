class Question < ApplicationRecord
    has_many :responses
    accepts_nested_attributes_for :responses
    scope :by_current_page, lambda { |current_page| all.offset((current_page.to_i - 1) * 10).limit(10) }
end
