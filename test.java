public class menu {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String FoodItems[] = { "Hamburger", "Cheeseburger", "Hot Dog", "French Fries", "Soda" };
        Float Prices[] = { 5.99f, 6.99f, 4.99f, 2.99f, 1.99f };
        for (int i = 0; i < FoodItems.length; i++) {
            System.out.println((i + 1) + ". " + FoodItems[i] + " - " + Prices[i] + "$");
        }
        float sum = 0.0f;
        int items[] = new int[FoodItems.length];
        System.out.println(" Please choose your order by pressing its number and press 0 when you are done ");
        for (int i = 0;; i++) {
            int c = input.nextInt();
            if (c == 0) {
                break;
            }
            if (c < 1 || c > 5) {
                System.out.println(" Enter a valid number ");
                continue;
            }
            items[c - 1]++;
            sum += Prices[c - 1];
        }
        for (int i = 0; i < FoodItems.length; i++) {
            if (items[i] > 0) {
                System.out.println(items[i] + "x " + FoodItems[i] + " : " + Prices[i] * items[i] + "$");
            }
        }
        System.out.println(" Total Price : " + sum + "$ ");
    }
}
