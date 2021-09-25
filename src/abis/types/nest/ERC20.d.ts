/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ERC20Interface extends ethers.utils.Interface {
  functions: {
    '_setupDecimals(uint8)': FunctionFragment
    'name()': FunctionFragment
    'symbol()': FunctionFragment
    'decimals()': FunctionFragment
    'totalSupply()': FunctionFragment
    'balanceOf(address)': FunctionFragment
    'transfer(address,uint256)': FunctionFragment
    'allowance(address,address)': FunctionFragment
    'approve(address,uint256)': FunctionFragment
    'transferFrom(address,address,uint256)': FunctionFragment
    'increaseAllowance(address,uint256)': FunctionFragment
    'decreaseAllowance(address,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: '_setupDecimals', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'increaseAllowance', values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: 'decreaseAllowance', values: [string, BigNumberish]): string

  decodeFunctionResult(functionFragment: '_setupDecimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result

  events: {
    'Approval(address,address,uint256)': EventFragment
    'Transfer(address,address,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment
}

export class ERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ERC20Interface

  functions: {
    _setupDecimals(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    name(overrides?: CallOverrides): Promise<[string]>

    symbol(overrides?: CallOverrides): Promise<[string]>

    decimals(overrides?: CallOverrides): Promise<[number]>

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  _setupDecimals(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  symbol(overrides?: CallOverrides): Promise<string>

  decimals(overrides?: CallOverrides): Promise<number>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    _setupDecimals(value: BigNumberish, overrides?: CallOverrides): Promise<void>

    name(overrides?: CallOverrides): Promise<string>

    symbol(overrides?: CallOverrides): Promise<string>

    decimals(overrides?: CallOverrides): Promise<number>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    transfer(recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    transferFrom(sender: string, recipient: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>
  }

  estimateGas: {
    _setupDecimals(value: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    symbol(overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<BigNumber>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    _setupDecimals(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
