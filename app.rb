require 'sinatra'

get '/' do
  erb :home
end

get '/schedule' do
  erb :schedule
end

get '/gallery' do
  erb :gallery
end

get '/about' do
  erb :about
end

# get '/signin' do
#   erb :signin
# end

post '/sign-in' do
	puts "my params are" + params.inspect
end