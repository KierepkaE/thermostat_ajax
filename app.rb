require 'sinatra'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do

    if session[:temperature] == nil
      @temperature = "20"
    else
      @temperature = session[:temperature]
    end


    if session[:powerSavingMode] == nil
      @powerSavingMode = 'on'
    else
      @powerSavingMode = session[:powerSavingMode]
    end

    erb :index
  end

  post '/temperature' do
    session[:temperature] = params[:temperature]
    session[:powerSavingMode] = params[:powerSavingMode]


  end

run! if app_file == $0

end
