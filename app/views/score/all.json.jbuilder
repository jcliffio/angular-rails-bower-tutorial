json.scores @scores do |score|
  json.id score.id
  json.value score.value
  json.user do
    json.id score.user.id
    json.email score.user.email
  end
end
