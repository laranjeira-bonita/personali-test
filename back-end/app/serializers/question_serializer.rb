class QuestionSerializer < ActiveModel::Serializer
  attributes :index, :name, :responses
  def index
    Question.all.order(id: :asc).ids.index(object.id) + 1
  end

  def responses
    object.responses.as_json(only: [:id, :name])
  end
end
