# Assumptions

1. The calculator does not support nested functions

   `sin(cos(30))` => invalid

   `sin(30)` => valid

2. The calculator does not consider epressions within brackets valid, unless they are the argument of one of the supported trigonometric functions

   `(10+20)` => invalid

   `cos(10+20)` => valid
