load("carray.js")
var nums = new CArray(100);
nums.setData();
print("Before shellsort2: \n");
print(nums.toString());
nums.shellsort2();
print("\nAfter shellsort2: \n");
print(nums.toString());

