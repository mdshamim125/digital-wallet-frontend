import { TransactionForm } from "@/components/modules/dashboard/TransactionForm";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";

export default function WithdrawMoney() {
  const [trigger, result] = useCashInMutation();

  return (
    <TransactionForm
      title="Add Money to a user’s wallet"
      description="Enter the amount and select an user account"
      actionLabel="Cash In"
      useMutationHook={() => [trigger, result]}
    />
  );
}
