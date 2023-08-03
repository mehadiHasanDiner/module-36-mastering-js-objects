const first = { a: 5 };
const second = { a: 5 };
if (first === second) {
  console.log("they are the same");
} else {
  console.log("different");
}

// এগুলো হচ্ছে প্রিমিটিভ ডাটা টাইপ, সেক্ষেত্রে এগুলো শুধু মান চেক করবে না, এগুলো তাদের রেফারেন্স চেক করবে। রেফারেন্স ভিন্ন হওয়ার কারনে এরা different হবে।

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// এভাবে স্ট্রিং-এ কনর্ভাট করেও চেক করা যায়, কিন্ত যদি কি গুলোর অর্ডার চেঞ্জ করা হয় তবে এরা সঠিক রেজাল্ট দিবে না। তাই এটা ইউজ করা যাবে না।

// কম্পেয়ার চেক করার আইডিয়াল উপায়।
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
}
