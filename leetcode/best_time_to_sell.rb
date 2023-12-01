def max_profit(prices)
  buy = 0
  sell = 1
  profit = 0
  max_profit = -1
  while sell < prices.length do
    profit = prices[sell] - prices[buy]
    if profit > 0
      if profit > max_profit
        max_profit = profit
      end
      sell += 1
    else
      buy = sell
      sell = buy + 1
    end
  end
  max_profit
end

puts max_profit([7, 1, 5, 3, 6, 4])
