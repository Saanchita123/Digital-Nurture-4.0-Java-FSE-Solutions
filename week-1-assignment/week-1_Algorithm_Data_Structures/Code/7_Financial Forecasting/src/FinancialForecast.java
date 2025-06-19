import java.util.Scanner;;

public class FinancialForecast {

    public static double calculatFutureValues(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculatFutureValues(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter initial investment amount: ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (e.g. 0.1 for 10%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter number of years to forecast: ");
        int years = sc.nextInt();
        double futureValue = calculatFutureValues(presentValue, growthRate, years);
        System.out.println("Future value after " + years + "years :" + futureValue);
        sc.close();
    }
}