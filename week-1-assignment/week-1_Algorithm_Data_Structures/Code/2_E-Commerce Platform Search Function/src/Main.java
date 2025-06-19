import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
       public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SearchEngine obj=new SearchEngine();
        Product[] products = {
                new Product(1, "Shoes", "Footware"),
                new Product(2, "T-shirts", "clothing"),
                new Product(3, "Laptop", "Electronics"),
                new Product(4, "phone", "Electronics")
        };
        System.out.println("Enter the item you want to search : ");
        String searchName = sc.nextLine().toLowerCase();
        Product foundProduct = obj.linearSearch(products, searchName);
        if (foundProduct != null) {
            System.out.println("(linear search result) product found : " + foundProduct);
        } else {
            System.out.println("not found :");
        }
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product BinaryResult = obj.binarySearch(products, searchName);
        System.out.println("binary serach result :" + BinaryResult);
        sc.close();

    }

}
