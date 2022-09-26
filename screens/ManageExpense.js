import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) {
  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpense</Text>;
}

export default ManageExpense;
