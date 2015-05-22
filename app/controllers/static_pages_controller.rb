class StaticPagesController < ApplicationController
  def test
      personal = [{'title' => 'task1', 'done' => true},{'title' => 'task2', 'done' => false}]
      render :json => personal
  end
end
