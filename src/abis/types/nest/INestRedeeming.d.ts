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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface INestRedeemingInterface extends ethers.utils.Interface {
  functions: {
    'setConfig(tuple)': FunctionFragment
    'getConfig()': FunctionFragment
    'redeem(address,uint256,address)': FunctionFragment
    'quotaOf(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'setConfig',
    values: [
      {
        activeThreshold: BigNumberish
        nestPerBlock: BigNumberish
        nestLimit: BigNumberish
        ntokenPerBlock: BigNumberish
        ntokenLimit: BigNumberish
        priceDeviationLimit: BigNumberish
      }
    ]
  ): string
  encodeFunctionData(functionFragment: 'getConfig', values?: undefined): string
  encodeFunctionData(functionFragment: 'redeem', values: [string, BigNumberish, string]): string
  encodeFunctionData(functionFragment: 'quotaOf', values: [string]): string

  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getConfig', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'redeem', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'quotaOf', data: BytesLike): Result

  events: {}
}

export class INestRedeeming extends BaseContract {
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

  interface: INestRedeemingInterface

  functions: {
    setConfig(
      config: {
        activeThreshold: BigNumberish
        nestPerBlock: BigNumberish
        nestLimit: BigNumberish
        ntokenPerBlock: BigNumberish
        ntokenLimit: BigNumberish
        priceDeviationLimit: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getConfig(overrides?: CallOverrides): Promise<
      [
        [number, number, number, number, number, number] & {
          activeThreshold: number
          nestPerBlock: number
          nestLimit: number
          ntokenPerBlock: number
          ntokenLimit: number
          priceDeviationLimit: number
        }
      ]
    >

    redeem(
      ntokenAddress: string,
      amount: BigNumberish,
      paybackAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    quotaOf(ntokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>
  }

  setConfig(
    config: {
      activeThreshold: BigNumberish
      nestPerBlock: BigNumberish
      nestLimit: BigNumberish
      ntokenPerBlock: BigNumberish
      ntokenLimit: BigNumberish
      priceDeviationLimit: BigNumberish
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getConfig(overrides?: CallOverrides): Promise<
    [number, number, number, number, number, number] & {
      activeThreshold: number
      nestPerBlock: number
      nestLimit: number
      ntokenPerBlock: number
      ntokenLimit: number
      priceDeviationLimit: number
    }
  >

  redeem(
    ntokenAddress: string,
    amount: BigNumberish,
    paybackAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  quotaOf(ntokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    setConfig(
      config: {
        activeThreshold: BigNumberish
        nestPerBlock: BigNumberish
        nestLimit: BigNumberish
        ntokenPerBlock: BigNumberish
        ntokenLimit: BigNumberish
        priceDeviationLimit: BigNumberish
      },
      overrides?: CallOverrides
    ): Promise<void>

    getConfig(overrides?: CallOverrides): Promise<
      [number, number, number, number, number, number] & {
        activeThreshold: number
        nestPerBlock: number
        nestLimit: number
        ntokenPerBlock: number
        ntokenLimit: number
        priceDeviationLimit: number
      }
    >

    redeem(
      ntokenAddress: string,
      amount: BigNumberish,
      paybackAddress: string,
      overrides?: CallOverrides
    ): Promise<void>

    quotaOf(ntokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    setConfig(
      config: {
        activeThreshold: BigNumberish
        nestPerBlock: BigNumberish
        nestLimit: BigNumberish
        ntokenPerBlock: BigNumberish
        ntokenLimit: BigNumberish
        priceDeviationLimit: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getConfig(overrides?: CallOverrides): Promise<BigNumber>

    redeem(
      ntokenAddress: string,
      amount: BigNumberish,
      paybackAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    quotaOf(ntokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    setConfig(
      config: {
        activeThreshold: BigNumberish
        nestPerBlock: BigNumberish
        nestLimit: BigNumberish
        ntokenPerBlock: BigNumberish
        ntokenLimit: BigNumberish
        priceDeviationLimit: BigNumberish
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>

    redeem(
      ntokenAddress: string,
      amount: BigNumberish,
      paybackAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    quotaOf(ntokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}