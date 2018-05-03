class BinaryHeap
  attr_reader :store, :prc

  def initialize(&prc)
    prc ||= Proc.new { |a, b| a <=> b }
    @prc = prc
    @store = []
  end

  def count
    @store.length
  end

  def extract
    @store[0], @store[count - 1] = @store[count - 1], @store[0]
    val = @store.pop
    @store = BinaryHeap::heapify_down(@store, 0, count, &@prc)

    val
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    @store = BinaryHeap::heapify_up(@store, count - 1, count, &@prc)
  end

  public
  def self.child_indices(len, parent_index)
    first_child = parent_index * 2 + 1
    second_child = parent_index * 2 + 2
    arr = []
    if second_child < len
      arr.unshift(second_child)
    end
    if first_child < len
      arr.unshift(first_child)
    end

    return arr
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |a, b| a <=> b }
    first, second = self.child_indices(len, parent_idx)
    return array if first.nil? || first >= len

    if second.nil? || second >= len
      if prc.call(array[first], array[parent_idx]) < 0
        array[first], array[parent_idx] = array[parent_idx], array[first]
        return self.heapify_down(array, first, len, &prc)
      end
    elsif prc.call(array[first], array[second]) < 0 && prc.call(array[first], array[parent_idx]) < 0
      array[first], array[parent_idx] = array[parent_idx], array[first]
      return self.heapify_down(array, first, len, &prc)
    elsif prc.call(array[second], array[parent_idx]) < 0
      array[second], array[parent_idx] = array[parent_idx], array[second]
      return self.heapify_down(array, second, len, &prc)
    end

    return array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    return array if child_idx == 0
    prc ||= Proc.new { |a, b| a <=> b }
    parent_idx = self.parent_index(child_idx)
    return array if parent_idx < 0

    if prc.call(array[child_idx], array[parent_idx]) < 0
      array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
      return self.heapify_up(array, parent_idx, len, &prc)
    end

    return array
  end
end

class DataStream
  attr_reader :maxHeap, :minHeap
  def initialize()
    @maxHeap = BinaryHeap.new { |a, b| b <=> a }
    @minHeap = BinaryHeap.new { |a, b| a <=> b }
  end

  def add(num)
    midian = self.find_median
    if !midian
      @maxHeap.push(num)
    elsif num < midian
      @maxHeap.push(num)
    else
      @minHeap.push(num)
    end

    while @maxHeap.count > @minHeap.count
      @minHeap.push(@maxHeap.extract)
    end

    while @minHeap.count > @maxHeap.count
      @maxHeap.push(@minHeap.extract)
    end
  end

  def find_median
    return nil if @maxHeap.count === 0 && @minHeap.count === 0
    if @maxHeap.count.odd?
      return @maxHeap.peek
    elsif @minHeap.count.odd?
      return @minHeap.peek
    else
      return (@minHeap.peek + @maxHeap.peek) / 2.0
    end
  end
end

stream = DataStream.new
stream.add(2)
stream.add(2)
stream.add(4)
stream.add(4)
stream.add(16)
stream.add(12)
stream.add(10)
stream.add(8)
stream.add(4)
stream.add(2)
stream.add(16)
stream.add(12)
stream.add(10)
stream.add(8)

p stream.maxHeap.store
p stream.minHeap.store
p stream.find_median
