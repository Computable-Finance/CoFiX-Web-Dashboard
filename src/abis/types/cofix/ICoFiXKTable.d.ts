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

interface ICoFiXKTableInterface extends ethers.utils.Interface {
  functions: {
    'setK0(uint256,uint256,int128)': FunctionFragment
    'setK0InBatch(uint256[],uint256[],int128[])': FunctionFragment
    'getK0(uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'setK0', values: [BigNumberish, BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'setK0InBatch', values: [BigNumberish[], BigNumberish[], BigNumberish[]]): string
  encodeFunctionData(functionFragment: 'getK0', values: [BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'setK0', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setK0InBatch', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getK0', data: BytesLike): Result

  events: {}
}

export class ICoFiXKTable extends BaseContract {
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

  interface: ICoFiXKTableInterface

  functions: {
    setK0(
      tIdx: BigNumberish,
      sigmaIdx: BigNumberish,
      k0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setK0InBatch(
      tIdxs: BigNumberish[],
      sigmaIdxs: BigNumberish[],
      k0s: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>
  }

  setK0(
    tIdx: BigNumberish,
    sigmaIdx: BigNumberish,
    k0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setK0InBatch(
    tIdxs: BigNumberish[],
    sigmaIdxs: BigNumberish[],
    k0s: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    setK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, k0: BigNumberish, overrides?: CallOverrides): Promise<void>

    setK0InBatch(
      tIdxs: BigNumberish[],
      sigmaIdxs: BigNumberish[],
      k0s: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>

    getK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    setK0(
      tIdx: BigNumberish,
      sigmaIdx: BigNumberish,
      k0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setK0InBatch(
      tIdxs: BigNumberish[],
      sigmaIdxs: BigNumberish[],
      k0s: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    setK0(
      tIdx: BigNumberish,
      sigmaIdx: BigNumberish,
      k0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setK0InBatch(
      tIdxs: BigNumberish[],
      sigmaIdxs: BigNumberish[],
      k0s: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getK0(tIdx: BigNumberish, sigmaIdx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
