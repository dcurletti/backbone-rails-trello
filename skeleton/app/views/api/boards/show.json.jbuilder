# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
# json.extract! @board, :title, :lists
json.title @board.title
json.lists @board.lists do |list|
  json.(list, :title, :ord)
  json.cards list.cards do |card|
    json.(card, :title, :description, :ord)
  end
end
