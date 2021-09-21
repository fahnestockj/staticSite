---
title: "Algorithimic Stock Trader"
date: 2021-05-13T12:19:53-04:00
draft: true
showtoc: false
---
<h3>Mean Reversion Strategy</h3>
<p>Currently just a simple strategy </p>

		

	if self.SlowADX > self.FastADX:
            self.log('TRADENOWWEEWWOOOO')
            if self.dataclose[0] < self.BBands.bot:

                self.log('Buy Create, %.2f' %self.dataclose[0])
                self.buy()
                if self.position.size < 0:
                    self.buy(size = abs(self.position.size))
                    self.log('Buy Create: Starter, %.2f' %self.dataclose[0])
                    #self.buy(size = self.params.starterPosition)



            if self.dataclose[0] > self.BBands.top:
                self.log('Sell Created, %.2f' % self.dataclose[0])
                if self.position.size > 0:
                    self.sell(size = abs(self.position.size))
<p>The strategy uses ADX a trend strength indicator to determine a window to trade then uses bollinger bands to catch a large change with the hope that a reversal occurs and the stock trends back to the mean. Mean reversion strategies work best when taking advantage of all the opportunities to trade which includes shorting from an overextension in the stock price. Unfortunately shorting requires a sizeable brokerage account to account for the risked leverage. </p>
<h3>Framework and Language</h3>
Using the backtrader framework with python to backtest the strategy on historical data.

