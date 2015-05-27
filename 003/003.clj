;; The prime factors of 13195 are 5, 7, 13 and 29.
;; What is the largest prime factor of the number 600851475143 ?

(defn factors [n]
  (loop [r []
         c 2]
    (if (= 0 (mod n c))
      (if (= -1 (.indexOf r (/ n c)))
        (recur (conj r c (/ n c)) (inc c))
        r)
      (recur r (inc c)))))

(defn prime? [n]
  (loop [c 2]
    (if (= c n)
      true
      (if (= 0 (mod n c))
        false
        (recur (inc c))))))

(defn largest-prime-factor [n]
  (last (sort (filter prime? (factors n)))))

(largest-prime-factor 600851475143)
;; 6857
