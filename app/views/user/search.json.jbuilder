json.users @users do |user|
  json.id user.id
  json.email user.email
end
json.message @message
