class SectionsController < ApplicationController
  def index
    sections = []
    Section.all.each{|section| sections[section.id] = section }
    render :json => sections
  end
end
