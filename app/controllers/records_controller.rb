class RecordsController < ApplicationController
  def index
    record_groups = Record.order(:date, :created_at).group_by{|record| record.date }
    record_groups = record_groups.map { |date, records|
      {
        :date => date,
        :records => records
      }
    }
    render :json => record_groups
  end

  def new
    record = Record.new
    params.each {|key, val|
      if record.attributes.key? key
        record[key] = val
      end
    }
    record.save
    render :json => record
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
