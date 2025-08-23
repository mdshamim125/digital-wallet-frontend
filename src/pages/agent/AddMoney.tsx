import { TransactionForm } from "@/components/modules/user/TransactionForm";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [trigger, result] = useCashInMutation();

  return (
    <TransactionForm
      title="Add money to a user’s wallet"
      description="Enter the amount and select an user account"
      actionLabel="Cash In"
      useMutationHook={() => [trigger, result]}
    />
  );
}
