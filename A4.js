/*হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে  এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে।
তোমার ফাংশনটি দুটি ইনপুট নিবে:
মাসিক আয় - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক আয়কে প্রকাশ করে।
মাসিক খরচ - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক খরচকে প্রকাশ করে।
ফাংশনটি আয় এবং খরচের পার্থক্যের ২০% হিসাব করবে এবং তা ট্যাক্স হিসেবে রিটার্ন করবে।

Input :  
প্রথম ইনপুট:  একটি পজিটিভ সংখ্যা যা মাসিক আয়। (0<=income )
দ্বিতীয় ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক খরচ।  (0<=expense )
Income সবসময় expense থেকে সমান বা  বেশি হবে।  (income >=expense)

*/
function calculateTax(income, expenses) {
    
    if(income < 0 || expenses < 0 || expenses > income){
        return "Invalid Input";
    }
    let harunThakbe = income - expenses;
    let tax = harunThakbe * 0.20;
    return tax;
}
console.log(calculateTax(10000,3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));



