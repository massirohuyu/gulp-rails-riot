class SubsectionsController < ApplicationController
  def index
    subsections = []
    Subsection.all.each{|subsection| subsections[subsection.id] = subsection }
    render :json => subsections
  end
end
