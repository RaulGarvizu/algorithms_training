def three_sum_closest(nums, target)
  min_distance = Float::INFINITY
  result = Float::INFINITY
  nums.sort!

  (0..nums.length - 3).each do |i|
    left = i + 1
    right = nums.length - 1
    while left < right
      sum = nums[i] + nums[left] + nums[right]
      distance = (sum - target).abs
      if distance < min_distance
        min_distance = distance
        result = sum
      end
      if sum == target
        return sum
      elsif sum < target
        left += 1
      else
        right -= 1
      end
    end
  end
  result
end
