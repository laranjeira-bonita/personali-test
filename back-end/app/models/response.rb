class Response < ApplicationRecord
    belongs_to :question, dependent: :destroy
    enum category: {
        e: 0,
        f: 1,
        i: 2,
        j: 3,
        n: 4,
        p: 5,
        s: 6,
        t: 7
        }
end
