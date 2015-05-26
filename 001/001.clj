;; If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
;; Find the sum of all the multiples of 3 or 5 below 1000.

(apply + (filter #(or (= 0 (mod % 3))
                     (= 0 (mod % 5))) (range 1 1000)))
;; sum 233168

;; AFTER OVERVIEW

(defn sum-divisible-by [t n]
  (let [p (/ (- t (rem t n)) n)]
    (/ (* n p (+ p 1)) 2)))

(defn res [t]
  (- (+ (sum-divisible-by t 3)
        (sum-divisible-by t 5)) (sum-divisible-by t 15)))

(res 999)
