def three_sum_closest(nums, target, min_distance = Float::INFINITY)
  result = Float::INFINITY
  sums = nums.combination(3).map { |c| c.sum }.each { |s|
    distance = (s - target).abs
    if distance < min_distance
      min_distance = distance
      result = s
    end
  }
  result
end
