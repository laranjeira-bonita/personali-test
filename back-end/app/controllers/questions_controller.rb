class QuestionsController < ApplicationController
    def index
        scope = Question.by_current_page(filter_params[:current_page]) # by_filter_params
        render json: ActiveModel::ArraySerializer.new(scope, each_serializer: QuestionSerializer)
    end
    private
    def filter_params
        params.permit(:current_page)
    end
end
