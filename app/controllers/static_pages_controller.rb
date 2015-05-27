class StaticPagesController < ApplicationController
  def index
  end

  def test
    record_groups = Record.all.group_by{|record| record.date }
    sections = []
    subsections = []
    Section.all.each{|section| sections[section.id] = section }
    Subsection.all.each{|subsection| subsections[subsection.id] = subsection }

    record_groups = record_groups.map { |date, records|
      {
        :date => date,
        :records => records.map { |record|
          {
            :id => record.id,
            :section     => { :id => record.section, :surface => sections[record.section].title },
            :subsection  => { :id => record.subsection, :surface => subsections[record.subsection].title },
            :amount      => { :value => record.amount, :surface => record.amount.to_s + "yen" }
          }
        }
      }
    }

    render :json => record_groups
  end
end
