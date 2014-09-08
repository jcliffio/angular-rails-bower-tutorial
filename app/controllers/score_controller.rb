class ScoreController < ApplicationController
  respond_to :json

  skip_before_action :verify_authenticity_token

  def all
    @scores = Score.all
  end

  def create
    @user = User.find(params[:userId])
    if @user
      if params[:value]
        @score = @user.scores.create(value: params[:value].to_i)
        if @score.save
          @message = "Created score successfully!"
        else
          @message = "There was an error creating the score!"
        end
      else
        @message = "Need a value"
      end
    else
      @message = "User does not exist"
    end
  end
end
