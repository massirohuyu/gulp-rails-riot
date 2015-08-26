class UsersController < ApplicationController
  def index
    users = []
    User.all.each{|user| users[user.id] = user }
    render :json => users
  end
end
