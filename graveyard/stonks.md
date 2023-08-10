---
title: "Algorithimic Stock Trader"
date: 2021-05-13T12:19:53-04:00
draft: false
showtoc: false
---
### A Flawless Mean Reversion Strategy 🚀
#### Key Indicators
* [ADX](https://www.investopedia.com/articles/trading/07/adx-trend-indicator.asp) - Average Directional Index 
  * Used to determine a time window to trade
* [BBands](https://www.investopedia.com/terms/b/bollingerbands.asp) - Bollinger Bands
  * Used to catch overextensions (positive or negative) inside a time window 






		



	      if self.SlowADX > self.FastADX:
            self.log('TRADENOWWEEWWOOOO')
            if self.dataclose[0] < self.BBands.bot:

                self.log('Buy Create, %.2f' %self.dataclose[0])
                self.buy()
                if self.position.size < 0:
                    self.buy(size = abs(self.position.size))
                    self.log('Short closed: %.2f' %self.dataclose[0])
                    self.buy(size = self.position.size)


            if self.dataclose[0] > self.BBands.top:
                self.log('Sell Created, %.2f' % self.dataclose[0])
                if self.position.size > 0:
                    self.sell(size = abs(self.position.size))
The strategy uses ADX a trend strength indicator to determine a window to trade then uses bollinger bands to catch a large change with the hope that a reversal occurs and the stock trends back to the mean. Mean reversion strategies work best when taking advantage of all the opportunities to trade which includes shorting from an overextension in the stock price. Unfortunately shorting requires a sizeable brokerage account to cover the risked leverage. This is for good reason as this strategy consistently loses money when exposed to the risks of shorting 🤫. 
### Backtrader Framework and the Struggle to Acquire Data

Used the Backtrader framework with Python to back test the strategy on historical data. The data was surprisingly difficult to get a hold of. Originally planned to use the Alpaca Trading Brokerage who was supplying historical data access from Polygon.io. Unfortunately, Polygon realized they were missing out on many potential customers and pulled the access to their data. The only way to get data from Polygon without paying their ~$100 a month~ subscription fee was to limit to 5 API calls a minute. This project has seen some heavy reworking and will be posted about more soon! 
