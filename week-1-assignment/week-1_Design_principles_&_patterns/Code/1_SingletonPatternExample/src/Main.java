
public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("this is the first log " + logger1);
        Logger logger2 = Logger.getInstance();
        logger2.log("this is the second log" + logger2);

        if (logger1 == logger2) {
            System.out.println("both logger instances are the same.");

        } else {
            System.out.println("Difference instances created :");
        }

    }
}
