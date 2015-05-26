(defn foo [x]
  (loop [n (/ (last x) 2)
         d 3]
    (cond
      (integer? n) (concat x [(dec d) n])
      (= d n) nil
      :else (recur (/ (last x) d) (inc d)))))

(foo (foo (foo (foo (foo [13195])))))
(/ 13185 4)
