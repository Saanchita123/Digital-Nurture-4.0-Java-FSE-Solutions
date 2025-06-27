import org.junit.After;
import org.junit.Before;
import org.junit.Test;


import static org.junit.Assert.assertEquals;

public class AAATest {

    Calculator test;

    @Before
    public void setUp() {
        // Arrange: Setup before each test
        test= new Calculator();
        System.out.println("Setup complete.");
    }

    @Test
    public void testAddition() {
        // Act
        int result = test.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @After
    public void tearDown() {
        // Cleanup after each test
        test.cleanup();
        System.out.println("Teardown complete.");
    }
}
