class UserController < ApplicationController
  respond_to :json

  skip_before_action :verify_authenticity_token

  def all
    @users = User.all
  end

  def current
    @user = current_user
  end

  def search
    limit = params[:limit] ? params[:limit] : 10;
    @message = "No users found"
    if params[:email]
      @users = User.find_by_fuzzy_email(params[:email], limit: limit)
      @message = "Found #{@users.count}"
    end
  end
end
