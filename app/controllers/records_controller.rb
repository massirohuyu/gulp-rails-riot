class RecordsController < ApplicationController
  def index
    record_groups = Record.all.group_by{|record| record.date }
    record_groups = record_groups.map { |date, records|
      {
        :date => date,
        :records => records
      }
    }
    render :json => record_groups
  end

  def update
    id = params.delete(:id)
    record = Record.find(id)
    params.each {|key, val|
      if record.attributes.key? key
        record.update( key => val )
      end
    }
    render :json => record
  end
end
