require 'sinatra'

class Thermostat < Sinatra::Base

  enable :sessions

  get '/' do

    if session[:temperature] == nil
      p "making the default temperature 20"
      @temperature = "20"
    else
      @temperature = session[:temperature]
    end

    p "power saving mode is"
    p session[:powerSavingMode]
    
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
    p params

  end

run! if app_file == $0

end
