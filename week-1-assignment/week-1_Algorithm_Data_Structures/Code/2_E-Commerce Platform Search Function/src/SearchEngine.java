
public class SearchEngine {
    public  Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            String word = product.productName.toLowerCase();
            if (word.equals(targetName)) {
                return product;
            }
        }
        return null;
    }

    public  Product binarySearch(Product[] product, String targetName) {
        int left = 0;
        int right = product.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int compare = product[mid].productName.compareToIgnoreCase(targetName);
            if (compare == 0) {
                return product[mid];
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

 
}